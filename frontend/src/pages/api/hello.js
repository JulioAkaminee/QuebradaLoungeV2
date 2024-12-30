export default function Hello(req, res) {
  let nomes = ["julio"]; 

 

  if (req.method === "GET") {
    return res.status(200).json({ nomes });
  }


  return res.status(405).json({ error: "Método não permitido" });
}
