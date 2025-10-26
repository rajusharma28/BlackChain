const crypto = require("crypto");

// Create SHA256 hash function
function sha256(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

// Simple mining function
function mine(data, difficultyPrefix = "0000") {
  let nonce = 0;
  let hash = "";

  console.log(`Mining started... Looking for hash starting with "${difficultyPrefix}"`);

  // Keep trying until hash starts with given prefix (like 0000)
  while (true) {
    const input = data + nonce;
    hash = sha256(input);

    if (hash.startsWith(difficultyPrefix)) {
      console.log("Hash found!");
      console.log(`Data : ${data}`);
      console.log(`Nonce: ${nonce}`);
      console.log(`Hash : ${hash}`);
      break;
    }

    if (nonce % 100000 === 0) {
      console.log(`⛏️ Trying nonce ${nonce}... Current hash: ${hash}`);
    }

    nonce++;
  }
}

mine("Raju sends 5 BTC to Rahul");
