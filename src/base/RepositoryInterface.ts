
export default interface DAOInterface {

    find(): Promise<object[]>;
    save(obj: object): Promise<void>;
    edit(id: number, obj: object): Promise<void>;
    delete(id: number): Promise<void>;

};