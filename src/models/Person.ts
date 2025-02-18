import { Optional } from 'sequelize';
import {
    DataType,
    Table,
    Model,
    Column,
    CreatedAt,
    UpdatedAt,
} from 'sequelize-typescript';
import { z } from 'zod';

interface PersonAttributes {
    id: number;
    name: string;
}

// Disabling this rule because we want to allow empty object types for creation attributes
// so we can allow optional attributes.
/* eslint-disable @typescript-eslint/no-empty-object-type */
interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {}

export const PersonCreationSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
});

@Table({
    timestamps: true,
    tableName: 'persons',
    modelName: 'Person',
})
export default class Person extends Model<
    PersonAttributes,
    PersonCreationAttributes
> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
    })
    declare name: string;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;
}
