export default class Entity {
    id: string;
    lastModifiedDate?: string;
    createdDate?: string;
    lastModifiedBy?: string;
    name?: string;

    get(fieldName: string) {
        return this[fieldName];
    }
}
