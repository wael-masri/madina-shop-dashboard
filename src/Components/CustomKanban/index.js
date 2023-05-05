import React, { useState, useEffect } from "react";
import {
  WrapperKanban,
  Line,
  TitlesKanban,
  WrapperTitleKanban,
  WrapperBoxKanban,
  WrapperTitleiconkanban,
  TitleBoxKanban,
  IconBoxKanban,
  DescBoxKanban,
  ButtonAdd,
} from "./Style";
import EllipsisText from "react-ellipsis-text";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TbLayoutKanban } from "react-icons/tb";
import { MdDoneAll } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GlobalTitle } from "../../SubComponents";
import { ContainerPages, WrapperPages } from "../../Assets/Theme";
import kanbanApi from "../../Api/KanbanApi";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusAddKanban, changeStatusEditKanban } from "../../Redux/Actions/PopupsActions";
import {
  addToKanbanDo,
  setColumnKanban,
  setItemKanban,
} from "../../Redux/Actions/OtherStateActions";
const columnsFromBackend = {
  ["1"]: {
    name: "To Do",
    icon: <TbLayoutKanban />,
    items: [],
  },
  ["2"]: {
    name: "In Progress",
    icon: <AiOutlineClockCircle />,
    items: [],
  },
  ["3"]: {
    name: "Done",
    icon: <MdDoneAll />,
    items: [],
  },
  ["4"]: {
    name: "Testing",
    icon: <SiSpeedtest />,
    color: "#fcd63d",
    items: [],
  },
};
const updateKnban = async (columns, dispatch) => {
  const obj1 = { items: columns[1].items, name: "do" };
  dispatch(addToKanbanDo(columns[1].items));
  const obj2 = { items: columns[2].items, name: "progress" };
  const obj3 = { items: columns[3].items, name: "done" };
  const obj4 = { items: columns[4].items, name: "testing" };
  const update1 = await kanbanApi.update(obj1);
  const update2 = await kanbanApi.update(obj2);
  const update3 = await kanbanApi.update(obj3);
  const update4 = await kanbanApi.update(obj4);
};
const onDragEnd = (result, columns, setColumns, dispatch) => {
  var col = { ...columns };
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    col = {
      ...col,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    };
    setColumns(col);
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    col = {
      ...col,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    };
    setColumns(col);
  }
  updateKnban(col, dispatch);
};

const CustomKanban = () => {
  const dispatch = useDispatch();
  const stat = useSelector(state => state.popups);
  const [columns, setColumns] = useState(columnsFromBackend);

  useEffect(() => {
    const uploadedData = async () => {
      const dataUp = await kanbanApi.getAll();
      if (dataUp) {
        const filterUp1 = dataUp.data.filter((val) => val.name === "do");
        dispatch(addToKanbanDo(filterUp1[0]?.items));
        const filterUp2 = dataUp.data.filter((val) => val.name === "progress");
        const filterUp3 = dataUp.data.filter((val) => val.name === "done");
        const filterUp4 = dataUp.data.filter((val) => val.name === "testing");
        setColumns({
          ...columns,
          [1]: {
            name: "To Do",
            icon: <TbLayoutKanban />,
            items: filterUp1[0]?.items,
          },
          [2]: {
            name: "In Progress",
            icon: <TbLayoutKanban />,
            items: filterUp2[0]?.items,
          },
          [3]: {
            name: "Done",
            icon: <TbLayoutKanban />,
            items: filterUp3[0]?.items,
          },
          [4]: {
            name: "Testing",
            color: "#fcd63d",
            icon: <TbLayoutKanban />,
            items: filterUp4[0]?.items,
          },
        });
      }
    };
    uploadedData();
  }, [stat.isKanbanWork,stat.isKanbanEdit]);

  return (
    <ContainerPages>
      <WrapperPages>
        <GlobalTitle text="My Work" />
        <ButtonAdd onClick={() => dispatch(changeStatusAddKanban(true))}>
          Add Work
        </ButtonAdd>
        <Line></Line>
        <WrapperKanban>
          <DragDropContext
            onDragEnd={(result) => {
              onDragEnd(result, columns, setColumns, dispatch);
            }}
          >
            {Object.entries(columns).map(([columnId, column]) => {
              return (
                <div key={columnId} style={{ flex: 1 }}>
                  <WrapperTitleKanban color={column.color && column.color}>
                    <TitlesKanban>{column.name}</TitlesKanban>
                    {column.icon}
                  </WrapperTitleKanban>
                  <div style={{ margin: "0 5px" }}>
                    <Droppable droppableId={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "trensparent"
                                : "trensparent",
                              minHeight: 350,
                            }}
                          >
                            {column.items?.map((item, index) => {
                              return (
                                <Draggable
                                  key={item._id}
                                  draggableId={item._id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <WrapperBoxKanban
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        snapshot={snapshot}
                                        style={{
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <WrapperTitleiconkanban>
                                          <TitleBoxKanban>
                                            <EllipsisText
                                              text={item.title}
                                              length={15}
                                            />
                                          </TitleBoxKanban>
                                          <IconBoxKanban
                                            onClick={() => {
                                              dispatch(setColumnKanban(column));
                                              dispatch(setItemKanban(item));
                                              dispatch(changeStatusEditKanban(true))
                                            }}
                                          />
                                        </WrapperTitleiconkanban>
                                        <DescBoxKanban>
                                          <EllipsisText
                                            text={item.description}
                                            length={10}
                                          />
                                        </DescBoxKanban>
                                      </WrapperBoxKanban>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </WrapperKanban>
      </WrapperPages>
    </ContainerPages>
  );
};

export default CustomKanban;
