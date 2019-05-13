import React, { PureComponent } from 'react';
import styles from '../../stylesheets/modules/tab3/configGeneration.module';

class WhiteCardConfigWelcome extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`${styles.whiteCard} ${styles.welcomeCard}`}
        id={styles.welcomeMarginConfig}>
        <div id={styles.welcomeHeaderTabThree}>
          Build Customized Webpack.config File
        </div>
        {!this.props.isFrameWorkSelected && (
          <div id={styles.welcomeMessageTabThree}>
            Select project config options below
          </div>
        )}
      </div>
    );
  }
}

export default WhiteCardConfigWelcome;
