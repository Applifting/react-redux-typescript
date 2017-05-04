import { connect } from 'react-redux';
import { showPhotos, submitPhoto} from '../actions';
import { AlbumList } from '../components/album/AlbumList';

 const mapStateToProps = (state: any) => {
   return {
     photos: state.showPhotos.data
   };
 };

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onClick: () => {
      dispatch(showPhotos(ownProps.id));
    },
    sendPhoto: (url) => {
      dispatch(submitPhoto(url))
    }
  };
};

const Album = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList as any);

export default Album;
