import React, { useState } from "react";
import { DragContext, DragArea, DragItem } from "../../components";
import { makeStyles } from "@material-ui/core/styles";
import users from "../../util/users.json";

const useStyles = makeStyles(() => ({
  dragItem: {
	backgroundColor: 'black'
  },
}));
export const DragnDropPage = () => {
  const styles = useStyles();
  const [exampleUsers, setExampleUsers] = useState(users);

  return (
    <ul>
      <DragArea items={exampleUsers} onChange={setExampleUsers}>
        {exampleUsers.map((user, i) => (
          <DragItem style={styles.dragItem} key={`drag-${user.id}`} id={i}>
            <li>
              <span>
                <b>FirstName:</b> {user.firstName}{" "}
              </span>
              <span>
                <b>Email:</b> {user.email}
              </span>
            </li>
          </DragItem>
        ))}
      </DragArea>
    </ul>
  );
};

export default DragnDropPage;
