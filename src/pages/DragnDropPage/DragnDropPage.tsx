import React, { useState } from "react";
import { DragContext, DragArea, DragItem } from "../../components";
import { makeStyles } from "@material-ui/core/styles";
import users from "../../util/users.json";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';

const useStyles:any = makeStyles(() => ({
  dragItemContainer: {
	flex: 4,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    padding: 5,
    margin: 5,
  },
  dragItem: {
	flex: 1,
    flexDirection: 'column',
    marginTop: 5,
    minHeight: 10,
    minWidth: 300,
	listStyleType: 'none',
	padding: 10,
    margin: 3,
    backgroundColor: 'white',
    borderRadius: 15,
	boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    shadowOpacity: 0.25,
	elevation: 5,
	cursor: 'pointer',
  }
}));
export const DragnDropPage = () => {
  const styles = useStyles();
  const [exampleUsers, setExampleUsers] = useState(users);

  return (
    <ul>
      <DragArea items={exampleUsers} onChange={setExampleUsers}>
        {exampleUsers.map((user, i) => (
          <DragItem className={styles.dragItemContainer} key={`drag-${user.id}`} id={i}>
			<li className={styles.dragItem}>
			<PersonIcon style={{verticalAlign: "bottom"}}/>
              <span>
                <b>FirstName:</b> {user.firstName}{" "}
              </span>
			  <br/>
			<EmailIcon style={{verticalAlign: "bottom"}}/>
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
