import { Optional } from "sequelize/types"

export type CreateTypeDTO = {
    nom: string;
}

export type UpdateTypeDTO = Optional<CreateTypeDTO, 'nom'>
