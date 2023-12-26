// Write your code here
import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  componentDidMount() {
    this.getAllTeams()
  }

  getAllTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/KKR')
    console.log(response)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="teamMatchBg">
        <h1>hi</h1>
      </div>
    )
  }
}

export default TeamMatches
