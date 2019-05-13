import * as React from 'react';
import Dropzone from 'react-dropzone'
import { FiFileText } from "react-icons/fi";
import styles from '../../stylesheets/modules/universals/DropzoneContainer.module';

export default class DropzoneContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  //TODO: refactor to use async/await   

  render() {
    const iconStyle = {
      color: 'rgb(70, 94, 105)',
      fontSize: '40px',
      marginBottom: '10',
      strokeWidth: '1.5'
    };
    return (
      <Dropzone onDrop={this.props.onDropFunction}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()} style={{ 'outline': 'none' }}>
              <input {...getInputProps()} />
              <div className={styles.dropzone}>
                <FiFileText className={styles.iconStyle} />{this.props.text}
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    )
  }
}