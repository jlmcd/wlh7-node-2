let score = {
  gryffindor: 0,
  voldemort: 0
}

module.exports = {
  get(req, res) {
    res.status(200).send(score)
  },
  post(req, res) {
    const {team} = req.params
    if (!score[team]) score[team] = 0
    score[team]++
    res.status(200).send(score)
  },
  put: (req, res) =>  {
    let {newScore} = req.body
    score = newScore
    res.status(200).send(score)
  },
  delete: (req, res) => {
    const {team} = req.query
    delete score[team]
    res.status(200).send(score)
  }
}