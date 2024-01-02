import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="appImgContainer">
      <img className="appImg" src={imageUrl} alt={appName} />
      <p className="appHeading">{appName}</p>
    </li>
  )
}
export default AppItem
