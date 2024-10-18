const express = require("express");
const verifyProof = require("../utils/verifyProof");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const port = 1225;

const app = express();
app.use(express.json());

const merkleTree = new MerkleTree(niceList);

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = merkleTree.getRoot();

app.post("/gift", (req, res) => {
  const body = req.body;
  if (MERKLE_ROOT === body.root) {
    const isInTheList = verifyProof(body.proof, body.name, MERKLE_ROOT);
    if (isInTheList) {
      res.send("You got a toy robot!");
    } else {
      res.send("You are not on the list :(");
    }
  } else {
    res.send("The root of the tree is not valid");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
