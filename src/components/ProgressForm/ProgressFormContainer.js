import { connect } from 'react-redux';

import ProgressForm from './ProgressForm';
import { saveWeightAction } from '../../actions';

const mapStateToProps = state => ({
  progress: state.progress,
  activeTab: state.activeTab
});

const mapDispatchToProps = {
  save: saveWeightAction
};

const ProgressFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressForm);

export default ProgressFormContainer;
