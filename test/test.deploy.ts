import { ethers } from "hardhat";
import { expect, assert } from "chai";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

describe("FallBackExample", () => {
  let simpleStorageFactory: SimpleStorage__factory;
  let simpleStorage: SimpleStorage;
  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
    await simpleStorage.deployed();
  });
  it("Should start with a favorate number of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectValue = 0;
    assert.equal(currentValue.toString(), expectValue.toString());
  });
});
