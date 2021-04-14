from PIL import Image
import pytesseract


def recognize(image_file_path, debug=False):
    image = Image.open(image_file_path)
    text = pytesseract.image_to_string(image)
    if debug:
        image.show()
    return text
