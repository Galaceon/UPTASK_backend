// Define el esquema de Mongoose y el tipo TypeScript para la colección de proyectos en la base de datos.

import mongoose, {Schema, Document, PopulatedDoc} from "mongoose";
import { ITask } from "./Task";

//typescript
export interface IProject extends Document {
    projectName: string
    clientName: string
    description: string
    tasks: PopulatedDoc<ITask>
}

//mongoose
const ProjectSchema : Schema = new Schema({
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    clientName: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    }
})

const Project = mongoose.model<IProject>('Project', ProjectSchema)
export default Project