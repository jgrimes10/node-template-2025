import { Optional } from 'sequelize';
import {
    DataType,
    Table,
    Model,
    Column,
    CreatedAt,
    UpdatedAt,
} from 'sequelize-typescript';

interface PersonAttributes {
    id: number;
    name: string;
}

// Disabling this rule because we want to allow empty object types for creation attributes
// so we can allow optional attributes.
/* eslint-disable @typescript-eslint/no-empty-object-type */
interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {}

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
