from PIL import Image
import pytesseract
if __name__ != '__main__':
    from ...eadditives.ocr.local_settings import ABSOLUTE_PATH_TO_TESSERACT_EXECUTABLE
else:
    from local_settings import ABSOLUTE_PATH_TO_TESSERACT_EXECUTABLE  # just for testing

pytesseract.pytesseract.tesseract_cmd = ABSOLUTE_PATH_TO_TESSERACT_EXECUTABLE


def recognize(image_file_path, debug=False):
    image = Image.open(image_file_path)
    text = pytesseract.image_to_string(image)
    if debug:
        image.show()
    return text


# just for testing
if __name__ == '__main__':
    text = recognize('test.png')
    print(text)
