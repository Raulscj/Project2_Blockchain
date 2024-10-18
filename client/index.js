const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  //Create the tree
  const merkleTree = new MerkleTree(niceList);
  //Get the root of the tree
  const root = merkleTree.getRoot();

  //Find the proof to name block is in the list
  const name = "Norman Block";
  const index = niceList.findIndex((n) => n === name);
  const proof = merkleTree.getProof(index);
  //TODO: Investigar como puedo darle un dato desde la consola para interactuar con ese dato
  const body = {
    name,
    root,
    proof,
  };
  const { data: gift } = await axios.post(`${serverUrl}/gift`, body);

  console.log({ gift });
}

main();
