import spacy

# pip install keybert sentence-transformers
from keybert import KeyBERT
from enum import Enum, auto

class KeyWordEnum(Enum):
    SPACY_KW    = auto()
    BERT_KW     = auto()
    DEP_PARS_KW = auto()

class KeyWordSearch:

    # Constructor
    def __init__(self):
        pass

    # Spacy
    # ---------------------------------------------------------------
    def spacy_kw(self, text):
        nlp = spacy.load("en_core_web_sm")
        doc = nlp(text)

        # Extract candidate keywords (noun chunks + named entities)
        keywords = set()

        # Add noun chunks
        for chunk in doc.noun_chunks:
            keywords.add(chunk.text.lower())

        # Add named entities
        for ent in doc.ents:
            keywords.add(ent.text.lower())

        print("Extracted keywords:", keywords)

        return keywords

    # BERT
    # ---------------------------------------------------------------
    def bert_kw(self, text):
        # MiniLM is fast & strong for keyphrases
        kw_model = KeyBERT("sentence-transformers/all-MiniLM-L6-v2")

        # Top keywords (with MMR for diversity)
        keywords = kw_model.extract_keywords(
            text,
            keyphrase_ngram_range = (1, 3), # unigrams → trigrams
            stop_words            = "english",
            use_maxsum            = False,
            use_mmr               = True, # diversify similar phrases
            diversity             = 0.6,
            top_n                 = 10
        )

        print(keywords) # List of (keyword, score)

        return text