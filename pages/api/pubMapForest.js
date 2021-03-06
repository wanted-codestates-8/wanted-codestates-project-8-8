import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

async function getPud(req, res) {
  const response = await axios.get(
    'https://www.chungbuk.go.kr/openapi-json/pubdata/pubMapForest.do',
    { params: { pageNo: req.query.n } }
  )

  let data = JSON.parse(response.data).response
  data = data.map((e) => ({
    id: uuidv4(),
    name: e.fcNm,
    addr: e.fcAddr,
    tel: e.ref1,
  }))

  res.status(200).json(data)
}

export default getPud
