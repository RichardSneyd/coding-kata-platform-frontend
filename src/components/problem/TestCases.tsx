import {
  ExpandLess,
  ExpandMore,
  InputOutlined,
  OutputOutlined,
  SubdirectoryArrowRight,
} from "@mui/icons-material";
import {
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import { Case } from "../../interfaces/problemSet";

interface ITestCasesProps {
  testCase: Case;
  defaultOpen?: boolean;
}

const TestCases = ({ testCase, defaultOpen = false }: ITestCasesProps) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <InputOutlined />
        </ListItemIcon>
        <ListItemText
          primary={`Input${testCase.inputs?.length > 1 ? "s" : ""}`}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {testCase.inputs?.map((input, index) => {
            return (
              <ListItem key={`${index}-${input.id}`} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SubdirectoryArrowRight />
                </ListItemIcon>
                <ListItemText primary={`${input.value} (${input.dataType})`} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
      <ListSubheader>Expected Output</ListSubheader>
      <ListItem>
        <ListItemIcon>
          <OutputOutlined />
        </ListItemIcon>
        <ListItemText
          primary={`${testCase.output?.value} (${testCase.output?.dataType})`}
        />
      </ListItem>
    </>
  );
};

export default TestCases;
