import { Router, Request } from 'express'

const router = Router()

const getLines = (input: string) => input.split(/\n/).filter(Boolean);
const getImports = (lines: string[]) => lines.filter(line => line.includes("import"));
const getContract = (lines: string[]) => lines.filter(line => line.includes("contract"));
const importCleanRegEx = /import|\s|;|"/ig


router.post("/analyze", (req: Request, res) => {

  console.log(req)

  const { code } = req.body

  if (!code) {
    res.status(400)
    res.send({ error: "Bad Request" })
  }

  const lines = getLines(code);
  const imports = getImports(lines).map((raw) => raw.replace(importCleanRegEx, ""));
  const contracts = getContract(lines).map(raw => raw.trim().split(" ")[1]);

  res.status(200)

  res.send({
    imports,
    contracts,
  })
});

export default router