import DBContext, { IUser } from ".";

describe("User Database", () => {
  afterEach(() => {
    DBContext.clear();
  });

  it("should have access to a database connection", () => {
    expect(DBContext).toBeDefined();
  });

  it("Should save record for a given user", async () => {
    const createSpy = jest.spyOn(DBContext, "create");
    const createdUser = await DBContext.create({ username: "Srud Salam" });

    expect(createSpy).toHaveBeenCalledTimes(1);
    expect(createdUser).toEqual({
      id: 1,
      username: "Srud Salam",
    } as IUser);
  });

  it("should throw an error for invalid data", async () => {
    const user = null;
    const createdUser = async () => await DBContext.create(user!);
    expect(createdUser).rejects.toThrowError("Missing userdata");
  });

  it("should clear the database when invoked", async () => {
    const clearSpy = jest.spyOn(DBContext, "clear");
    DBContext.clear();

    const users = await DBContext.all();
    expect(users).toEqual([] as IUser[]);
    expect(clearSpy).toHaveBeenCalled();
  });
});
