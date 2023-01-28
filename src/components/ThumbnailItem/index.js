import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItemDetails, onClickThumbnailItem} = props
  const {thumbnailUrl, id} = thumbnailItemDetails

  const onClickThumbnail = () => {
    onClickThumbnailItem(id)
  }

  return (
    <li className="thumbnail-item-container" onClick={onClickThumbnail}>
      <img src={thumbnailUrl} alt="thumbnailUrl" className="thumbnail-item" />
    </li>
  )
}

export default ThumbnailItem
