import * as React from 'react';
import styles from '../../stylesheets/modules/home/home.module';

const D3ChartContainerCard = props => {
  return (
    <div
      className={
        props.isChartCardDisplayed
          ? `${styles.whiteCard} ${styles.setHeight}`
          : `${styles.whiteCardOff}`
      }>
      <div className="smallerMainContainer">
        <div id="graphsContainer">
          <div
            className={
              props.isSunburstDisplayed
                ? `${styles.d3DisplayOn}`
                : `${styles.d3DisplayOff}`
            }>
            <div id="chart">
              <div id="sequence" />
              <div id="explanation">
                <span id="filename" />
                <br />
                <span id="percentage" />
                <br />
                <div>
                  <span id="filesize" /> <br />
                </div>
              </div>
              <div className={styles.chartSVGContainer}>
                <svg
                  width={props.width}
                  height={props.height}
                  className="sunburst"
                />
              </div>
              <div>
                <span id="issuerPath" /> <br />
              </div>
            </div>
          </div>

          <div
            className={
              props.isTreemapDisplayed
                ? `${styles.d3DisplayOn}`
                : `${styles.d3DisplayOff}`
            }>
            <div id="sequenceTreeMap" />
            <div id="explanationTree">
              <div id="ancestors" />
              <span id="treemapText" />
              <span id="filenameTree" />
              <br />
              <span id="percentageTree" />
              <br />
              <div>
                <span id="filesizeTree" /> <br />
              </div>
            </div>
            <div style={{ paddingTop: '30px' }} id="chartTreeMap">
              <div className={styles.chartSVGContainer}>
                <svg width="650px" height={props.height} id="treemap" />
              </div>
            </div>
          </div>

          <div
            className={
              props.isTreemapZoomDisplayed
                ? `${styles.d3DisplayOn}`
                : `${styles.d3DisplayOff}`
            }>
            <div id="explanationTreeZoom">
              <div id="ancestorsZoom" />
              <span id="treemapTextZoom" />
              <span id="filenameTreeZoom" />
              <br />
              <span id="percentageTreeZoom" />
              <br />
              <div>
                <span id="filesizeTreeZoom" /> <br />
              </div>
            </div>
            <div id="sequenceTreeMapZoom" />
            <div className={styles.chartSVGContainer}>
              <div className={styles.zoomTreemapColumnContainer}>
                <div className={styles.up}>&larr; UP</div>
                <div
                  style={{ paddingTop: '10px' }}
                  className={styles.feature}
                  id="chartTreeMapZoom">
                  <svg
                    width={props.width}
                    height={props.height}
                    id="treemapZoom"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="zoomContainer"
            className={
              props.isSunburstZoomDisplayed
                ? `${styles.d3DisplayOn}`
                : `${styles.d3DisplayOff}`
            }
          />
        </div>
      </div>
    </div>
  );
};

export default D3ChartContainerCard;
