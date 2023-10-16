import {
  CaretRightOutlined,
  DeleteOutlined,
  PauseOutlined,
  ExportOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  UndoOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Card, Space, Button, Tooltip } from "antd";

import { Polygon } from "@/types";

import styles from "../styles/Segmentation.module.css";

type ButtonsCardProps = {
  handleStartButtonClick: any;
  inDrawing: any;
  drawingStarted: any;
  selectedPolygon: any;
  selectedVertex: any;
  movingSelectedVertex: any;
  polygonInDrawing: any;
  polygons: any;
  handleFinishButtonClick: any;
  handleZoomIn: any;
  handleZoomOut: any;
  handleDragUp: any;
  handleDragDown: any;
  handleDragRight: any;
  handleDragLeft: any;
  handleDeletePolygonButtonClick: any;
  handlePointPolygonButtonClick: any;
  handleUndoPointClick: any;
  handleMovingSelectedVertexButtonClick: any;
  handleAddNewPointButtonClick: any;
  saveCoordenates: any;
};

const ButtonsCard = ({
  drawingStarted,
  handleDeletePolygonButtonClick,
  handlePointPolygonButtonClick,
  handleUndoPointClick,
  handleMovingSelectedVertexButtonClick,
  handleAddNewPointButtonClick,
  handleFinishButtonClick,
  handleZoomIn,
  handleZoomOut,
  handleDragUp,
  handleDragDown,
  handleDragRight,
  handleDragLeft,
  handleStartButtonClick,
  inDrawing,
  saveCoordenates,
  selectedPolygon,
  selectedVertex,
  movingSelectedVertex,
  polygonInDrawing,
  polygons,
}: ButtonsCardProps) => {
  let firstAndLast = false;

  if (selectedVertex.length === 2) {
    for (let i = 0; i < polygons.length; i++) {
      if (selectedVertex[0][0] === polygons[i].id) {
        if (
          (selectedVertex[0][1] === 0 &&
            selectedVertex[1][1] === polygons[i].points.length - 1) ||
          (selectedVertex[0][1] === polygons[i].points.length - 1 &&
            selectedVertex[1][1] === 0)
        ) {
          firstAndLast = true;
          break;
        }
      }
    }
  }

  return (
    <div>
      <div style={{ display: "inline-block" }}>
        <Card title="Actions" className={styles.card_tools} size="small">
          <Space direction="vertical" align="center" size={"middle"}>
            <Tooltip placement="left" title="Undo Point Click">
              <Button
                type="primary"
                danger
                onClick={handleUndoPointClick}
                icon={<UndoOutlined />}
                disabled={!inDrawing}
              />
            </Tooltip>
            <Tooltip placement="left" title="Delete point">
              <Button
                type="primary"
                danger
                onClick={handlePointPolygonButtonClick}
                icon={<DeleteOutlined />}
                disabled={
                  inDrawing ||
                  selectedVertex.length === 0 ||
                  movingSelectedVertex === true
                }
              />
            </Tooltip>
            <Tooltip placement="left" title="Edit selected point">
              <Button
                type="primary"
                onClick={handleMovingSelectedVertexButtonClick}
                icon={<EditOutlined />}
                disabled={inDrawing || selectedVertex.length !== 1}
              />
            </Tooltip>
            <Tooltip placement="left" title="Add new point">
              <Button
                type="primary"
                onClick={handleAddNewPointButtonClick}
                icon={<PlusCircleOutlined />}
                disabled={
                  inDrawing ||
                  selectedVertex.length !== 2 ||
                  (Math.abs(selectedVertex[0][1] - selectedVertex[1][1]) != 1 &&
                    firstAndLast === false)
                }
              />
            </Tooltip>
            <Tooltip placement="left" title="Start segmentation">
              <Button
                type="primary"
                onClick={handleStartButtonClick}
                icon={<CaretRightOutlined />}
                disabled={
                  inDrawing || drawingStarted || movingSelectedVertex === true
                }
              />
            </Tooltip>
            <Tooltip placement="left" title="Finish polygon">
              <Button
                type="primary"
                onClick={handleFinishButtonClick}
                icon={<PauseOutlined />}
                disabled={
                  !inDrawing ||
                  (polygonInDrawing?.points.length != undefined &&
                    polygonInDrawing?.points.length < 3)
                }
              />
            </Tooltip>
            <Tooltip placement="left" title="Zoom in">
              <Button
                type="primary"
                onClick={handleZoomIn}
                icon={<ZoomInOutlined />}
                disabled={inDrawing || movingSelectedVertex === true}
                // disabled={true}
              />
            </Tooltip>
            <Tooltip placement="left" title="Zoom out">
              <Button
                type="primary"
                onClick={handleZoomOut}
                icon={<ZoomOutOutlined />}
                disabled={inDrawing || movingSelectedVertex === true}
                // disabled={true}
              />
            </Tooltip>
            <Tooltip placement="left" title="Move up">
              <Button
                type="primary"
                onClick={handleDragUp}
                icon={<UpCircleOutlined />}
                disabled={inDrawing || movingSelectedVertex === true}
                // disabled={true}
              />
            </Tooltip>
            <Tooltip placement="left" title="Move down">
              <Button
                type="primary"
                onClick={handleDragDown}
                icon={<DownCircleOutlined />}
                disabled={inDrawing || movingSelectedVertex === true}
                // disabled={true}
              />
            </Tooltip>
            <Tooltip placement="left" title="Move left">
              <Button
                type="primary"
                onClick={handleDragLeft}
                icon={<LeftCircleOutlined />}
                disabled={inDrawing || movingSelectedVertex === true}
                // disabled={true}
              />
            </Tooltip>
            <Tooltip placement="left" title="Move right">
              <Button
                type="primary"
                onClick={handleDragRight}
                icon={<RightCircleOutlined />}
                disabled={inDrawing || movingSelectedVertex === true}
                // disabled={true}
              />
            </Tooltip>
            <Tooltip placement="left" title="Delete selected polygon">
              <Button
                type="primary"
                danger
                onClick={handleDeletePolygonButtonClick}
                icon={<DeleteOutlined />}
                disabled={inDrawing || selectedPolygon === null}
              />
            </Tooltip>
            <Tooltip placement="left" title="Export JSON">
              <Button
                type="primary"
                onClick={saveCoordenates}
                icon={<ExportOutlined />}
                disabled={inDrawing || movingSelectedVertex === true}
              />
            </Tooltip>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default ButtonsCard;
