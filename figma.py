import re

def figma_css_to_rn(css_text: str):
    rn_style = {}
    lines = css_text.strip().splitlines()

    for line in lines:
        line = line.strip().rstrip(";")
        if not line:
            continue

        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip()

        # Convert property names
        key = key.replace("-", "")
        key = re.sub(r"([a-z])([A-Z])", r"\1_\2", key).lower()

        # Convert CSS keys to React Native keys mapping
        key_map = {
            "background": "backgroundColor",
            "backgroundcolor": "backgroundColor",
            "borderradius": "borderRadius",
            "fontfamily": "fontFamily",
            "fontstyle": "fontStyle",
            "fontweight": "fontWeight",
            "fontsize": "fontSize",
            "letterspacing": "letterSpacing",
            "textalign": "textAlign",
            "lineheight": "lineHeight",
            "width": "width",
            "height": "height",
            "alignitems":"alignItems",
            "flexdirection":"flexDirection"
        }

        rn_key = key_map.get(key, key)

        # Remove 'px' and convert to number when appropriate
        if value.endswith("px"):
            value = value[:-2]
            try:
                value = int(value)
            except ValueError:
                value = float(value)
        elif value.isdigit():
            value = int(value)

        # Keep strings as strings
        if isinstance(value, str) and not value.isdigit():
            value = f'"{value}"'

        rn_style[rn_key] = value

    return rn_style


# Example usage
figma_css = """
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding-horizontal: 3px;
padding-vertical: 8px;
gap: 10px;
width: 102px;
height: 66px;
background: #FFFFFF;
border: 1px solid #C4C4C4;
border-radius: 10px;

"""

style = figma_css_to_rn(figma_css)
print("{")
for k, v in style.items():
    print(f"  {k}: {v},")
print("}")
