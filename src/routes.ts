import { Router, Request } from 'express'

const router = Router()

const input = `
import "VarysContractBase.sol";
import "VarysContractExtras.sol";

contract VarysContract {
  mapping (uint => address) public addresses;
}
`

const getLines = (input: string) => input.split(/\n/).filter(Boolean);
const getImports = (lines: string[]) => lines.filter(line => line.includes("import"));
const getContract = (lines: string[]) => lines.filter(line => line.includes("contract"));
const importCleanRegEx = /import|\s|;|"/ig
const contractCleanRegEx = /\s|contract|{|}/ig


router.get("/", (req, res) => {
  res.send({ hello: "Worlds" })
})

type RequestBody = {
  code: string
}

router.get("/analyze", (req: Request, res) => {
  const lines = getLines(input);
  const imports = getImports(lines).map((raw) => raw.replace(importCleanRegEx, ""));
  const contracts = getContract(lines).map(raw => raw.replace(contractCleanRegEx, ""));
 
  res.status(200)

  res.send({
    imports,
    contracts
  })
 
});

export default router