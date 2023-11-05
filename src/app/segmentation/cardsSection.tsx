import { useState } from "react";

import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Badge, Button, Card, Col, Row, Select, Tag } from "antd";
import moment from "moment";

import styles from "../styles/Segmentation.module.css";
import { Class, Image, Polygon } from "@/types";

type CardsSectionProps = {
  setPolygonName: React.Dispatch<React.SetStateAction<string>>;
  classesOptions: Class[];
  selectedPolygon: Polygon | null;
  selectedVertex: Array<[number, number]>;
  selectedImage: Image | null;
  polygons: Polygon[];
  setPolygons: React.Dispatch<React.SetStateAction<Polygon[]>>;
  classColor: (className: string) => string;
  setSelectedVertex: React.Dispatch<
    React.SetStateAction<Array<[number, number]>>
  >;
  setSelectedPolygon: React.Dispatch<React.SetStateAction<Polygon | null>>;
};

const CardsSection = ({
  classesOptions,
  polygons,
  setPolygons,
  selectedPolygon,
  selectedVertex,
  selectedImage,
  setPolygonName,
  classColor,
  setSelectedVertex,
  setSelectedPolygon,
}: CardsSectionProps) => {
  const [activeTabKey, setActiveTabKey] = useState<string>("classes");

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  const onRemove = (item: Polygon) => {
    const updatedPolygons = polygons.filter(
      (polygon: Polygon) => polygon?.name !== item?.name
    );

    if (selectedVertex.length > 0) {
      if (selectedVertex[0][0] === item.id) {
        setSelectedVertex([]);
      }
    }

    setSelectedPolygon(null);
    setPolygons(updatedPolygons);
  };

  const onHide = (item: Polygon) => {
    const updatedPolygons = polygons.map((polygon: Polygon) => {
      if (polygon.id === item.id) {
        return { ...polygon, hidden: !polygon.hidden };
      }
      return polygon;
    });

    if (selectedVertex.length > 0) {
      if (selectedVertex[0][0] === item.id) {
        setSelectedVertex([]);
      }
    }

    setSelectedPolygon(null);
    setPolygons(updatedPolygons);
  };

  const onSelect = (item: Polygon) => {
    if (item.hidden === false) {
      setSelectedPolygon(item);
    } else {
      setSelectedPolygon(null);
    }
  };

  const tabList = [
    {
      key: "classes",
      tab: "Classes",
    },
    {
      key: "annotations",
      tab: "Annotations",
    },
  ];

  const polygonGroups: { [key: string]: number } = {};
  polygons
    .filter(
      (polygon: Polygon) => polygon.imageName === selectedImage?.file_name
    )
    .forEach((polygon: Polygon) => {
      const polygonClass = polygon.class as unknown as string;
      polygonGroups[polygonClass] = (polygonGroups[polygonClass] || 0) + 1;
    });

  const contentList: Record<string, React.ReactNode> = {
    classes:
      polygons.length > 0 ? (
        <div>
          {Object.keys(polygonGroups).map((polygonClass, index) => {
            return (
              <div
                key={`${polygonClass}-${index}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <div>
                  <Badge color={classColor(polygonClass)} text={polygonClass} />
                </div>
                <div>
                  <Tag color="blue">{polygonGroups[polygonClass]}</Tag>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <span>No segmented classes</span>
      ),
    annotations:
      polygons.length > 0 ? (
        <div>
          {polygons
            .filter(
              (polygon: Polygon) =>
                polygon.imageName === selectedImage?.file_name
            )
            .map((polygon: Polygon) => (
              <div
                key={polygon.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  onClick={() => onSelect(polygon)}
                  style={{ cursor: "pointer" }}
                >
                  <Badge
                    color={classColor(polygon.class)}
                    text={
                      `${polygon.id} - ${polygon.class}` as unknown as string
                    }
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <Tag
                      onClick={() => onHide(polygon)}
                      color="blue"
                      style={{ cursor: "pointer" }}
                    >
                      {polygon.hidden ? (
                        <EyeInvisibleOutlined rev={undefined} />
                      ) : (
                        <EyeOutlined rev={undefined} />
                      )}
                    </Tag>
                  </div>

                  <div>
                    <Tag
                      onClick={() => onRemove(polygon)}
                      color="red"
                      style={{ cursor: "pointer" }}
                    >
                      <DeleteOutlined rev={undefined} />
                    </Tag>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <span>No segmented classes</span>
      ),
  };

  const handlePolygonNameChange = (value: string) => {
    const newPolygonName = value;
    setPolygonName(newPolygonName);
  };

  return (
    <div>
      <Card
        className={styles.card_tab}
        tabList={tabList}
        activeTabKey={activeTabKey}
        size="small"
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        {contentList[activeTabKey]}
      </Card>
      <Card
        title="Select the class to annotate"
        className={styles.card_tab}
        size="small"
      >
        <Select
          style={{ width: "100%" }}
          defaultValue={classesOptions[0]?.name}
          onChange={handlePolygonNameChange}
          options={classesOptions.map((option: { name: any }) => ({
            label: option?.name,
            value: option?.name,
          }))}
        />
      </Card>
      <Card title="Selected Polygon" className={styles.card_tab}>
        {selectedPolygon ? (
          <>
            <span>Id: {selectedPolygon.id}</span>
            <br />
            <span>Class: {selectedPolygon.class}</span>
            <br />
            <span>
              {moment(selectedPolygon.created_at).format("DD/MM/Y [at] HH:mm")}
            </span>
          </>
        ) : (
          "No selected polygon"
        )}
      </Card>
    </div>
  );
};

export default CardsSection;
