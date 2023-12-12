import {ExerciseType} from "./enums/ExerciseType";

export interface Exercise {
    id: number,
    topicId: number,
    type: ExerciseType,
    task: string,
    answer: string,
}