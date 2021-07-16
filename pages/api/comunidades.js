import datoCMSClient from "../../cms";

export default async function recebedor(req, res) {
    const data = await datoCMSClient.items.all({ "filter[type]": "community" })
    return res.json(data)
}