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
  scale: any;
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
  scale,
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
      <Card title="Actions" className={styles.card_tools} size="small">
        <Space direction="horizontal">
          <Space direction="vertical" align="center" size={"middle"}>
            <Tooltip title="Undo Point Click">
              <Button
                type="primary"
                danger
                onClick={handleUndoPointClick}
                icon={<UndoOutlined />}
                disabled={!inDrawing}
              />
            </Tooltip>
            <Tooltip title="Delete point">
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
            <Tooltip title="Edit selected point">
              <Button
                type="primary"
                onClick={handleMovingSelectedVertexButtonClick}
                icon={<EditOutlined />}
                disabled={inDrawing || selectedVertex.length !== 1}
              />
            </Tooltip>
            <Tooltip title="Add new point">
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
            <Tooltip title="Move left">
              <Button
                type="primary"
                onClick={handleDragLeft}
                icon={<LeftCircleOutlined />}
                disabled={
                  inDrawing || movingSelectedVertex === true || scale === 1.0
                }
                // disabled={true}
              />
            </Tooltip>
          </Space>
          <Space direction="vertical" align="center" size={"middle"}>
            <Tooltip title="Start segmentation">
              <Button
                type="primary"
                onClick={handleStartButtonClick}
                icon={<CaretRightOutlined />}
                disabled={
                  inDrawing || drawingStarted || movingSelectedVertex === true
                }
              />
            </Tooltip>
            <Tooltip title="Finish polygon">
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
            <Tooltip title="Delete selected polygon">
              <Button
                type="primary"
                danger
                onClick={handleDeletePolygonButtonClick}
                icon={<DeleteOutlined />}
                disabled={inDrawing || selectedPolygon === null}
              />
            </Tooltip>
            <Tooltip title="Move up">
              <Button
                type="primary"
                onClick={handleDragUp}
                icon={<UpCircleOutlined />}
                disabled={
                  inDrawing || movingSelectedVertex === true || scale === 1.0
                }
                // disabled={true}
              />
            </Tooltip>
            <Tooltip title="Move down">
              <Button
                type="primary"
                onClick={handleDragDown}
                icon={<DownCircleOutlined />}
                disabled={
                  inDrawing || movingSelectedVertex === true || scale === 1.0
                }
                // disabled={true}
              />
            </Tooltip>
          </Space>
          <Space direction="vertical" align="center" size={"middle"}>
            <Tooltip title="Export JSON">
              <Button
                type="primary"
                onClick={saveCoordenates}
                icon={<ExportOutlined />}
                disabled={inDrawing || movingSelectedVertex === true}
              />
            </Tooltip>
            <Tooltip title="Zoom in">
              <Button
                type="primary"
                onClick={handleZoomIn}
                icon={<ZoomInOutlined />}
                disabled={
                  inDrawing || movingSelectedVertex === true || scale >= 1.9
                }
                // disabled={true}
              />
            </Tooltip>
            <Tooltip title="Zoom out">
              <Button
                type="primary"
                onClick={handleZoomOut}
                icon={<ZoomOutOutlined />}
                disabled={
                  inDrawing || movingSelectedVertex === true || scale === 1.0
                }
                // disabled={true}
              />
            </Tooltip>
            <Tooltip title="Detinado a inferência">
              <Button type="primary" disabled={true} />
            </Tooltip>
            <Tooltip title="Move right">
              <Button
                type="primary"
                onClick={handleDragRight}
                icon={<RightCircleOutlined />}
                disabled={inDrawing || movingSelectedVertex === true || scale === 1.0}
                // disabled={true}
              />
            </Tooltip>
          </Space>
        </Space>
      </Card>
  );
};

export default ButtonsCard;
