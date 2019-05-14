
export default interface DAOInterface {

    find(): Promise<object[]>;
    save(obj: object): Promise<void>;

};