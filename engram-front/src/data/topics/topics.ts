import {Topic} from "../../models/Topic";
import {topicsContents} from "./topicsContents";

export const topics: Topic[] = [
    { id: 1, levelId: 2, name: 'Present Simple Tense', content: topicsContents[1] },
    { id: 2, levelId: 2, name: 'Present Continuous Tense', content: topicsContents[2] },
    { id: 3, levelId: 2, name: 'Past Simple Tense', content: topicsContents[3] },
    { id: 4, levelId: 2, name: 'Past Continuous Tense', content: topicsContents[4] },
    { id: 5, levelId: 2, name: 'Future with "will" and "going to"', content: topicsContents[5] },
    { id: 6, levelId: 1, name: 'Nouns (іменники)', content: topicsContents[6] },
    { id: 7, levelId: 1, name: 'Verbs (дієслова)', content: topicsContents[7] },
];