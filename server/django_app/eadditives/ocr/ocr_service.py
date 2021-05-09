from PIL import Image
import pytesseract
import re


class EadditivesRecognizer:

    def __init__(self, image_path):
        self.__image_path = image_path

    def recognize(self, debug=False):
        image = Image.open(self.__image_path)
        try:
            text = pytesseract.image_to_string(image, config="--psm 6")
            return text.strip()
        except Exception as e:
            print(e)

        if debug:
            image.show()

    @staticmethod
    def get_eadditives_from_text(text):
        eadditives = re.findall('([E£][ -]?[1-9][0-9]{2}[a-zA-Z]?)+', text)
        eadditives_numbers = [re.findall('\d+\w{1}', e)[0] for e in eadditives]
        return eadditives_numbers

    @staticmethod
    def recognize_eadditives(image_path):
        recognizer = EadditivesRecognizer(image_path)
        text = recognizer.recognize()
        return recognizer.get_eadditives_from_text(text)
