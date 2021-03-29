import React from "react";
import logo from "./assets/icons/chat.jpg";
import Person from "@material-ui/icons/Person";

import {
  Carousel,
  GlobalHeader,
  GlobalHeaderHelp,
  Popover,
  GlobalNavigationBar,
  GlobalNavigationBarRegion,
  GlobalNavigationBarLink,
  GlobalNavigationBarDropdown,
  DataTableColumn,
  DataTable,
  DataTableCell,
  Dropdown,
  DataTableRowActions,
  Avatar,
  Icon,
  AppLauncher,
  GlobalHeaderSetup,
  GlobalHeaderButton,
  Modal,
  DropdownTrigger,
} from "@salesforce/design-system-react";

import IconSettings from "@salesforce/design-system-react/components/icon-settings";

import { Button } from "@salesforce/design-system-react";
import Box from "@material-ui/core/Box";

import log from "@salesforce/design-system-react/utilities/log";

const items = [
  {
    id: "896a6a60",
    opportunityName: "Acme - 1,200 Widgets",
    accountName: "Acme",
    closeDate: "4/10/15",
    stage: "Value Proposition",
    confidence: "70%",
    amount: "$25,000,000",
    contact: "jrogers@acme.com",
  },
  {
    id: "44da9dcd",
    opportunityName: "Acme - 200 Widgets",
    accountName: "Acme",
    closeDate: "1/31/15",
    stage: "Prospecting",
    confidence: "30%",
    amount: "$5,000,000",
    contact: "bob@acme.com",
  },
  {
    id: "f988a721",
    opportunityName: "salesforce.com - 1,000 Widgets",
    accountName: "salesforce.com",
    closeDate: "1/31/15 3:45PM",
    stage: "Id. Decision Makers",
    confidence: "60%",
    amount: "$25,000",
    contact: "nathan@salesforce.com",
  },
  {
    id: "d7679cdd",
    opportunityName: "Acme - 800 Widgets",
    accountName: "Acme",
    closeDate: "6/11/18",
    stage: "Value Proposition",
    confidence: "85%",
    amount: "$970,000",
    contact: "jrogers@acme.com",
  },
  {
    id: "0085f7a0",
    opportunityName: "Acme - 744 Widgets",
    accountName: "Acme",
    closeDate: "4/15/17",
    stage: "Prospecting",
    confidence: "56%",
    amount: "$3,110,000",
    contact: "bob@acme.com",
  },
  {
    id: "b7acc778",
    opportunityName: "salesforce.com - 847 Widgets",
    accountName: "salesforce.com",
    closeDate: "5/23/18 1:02PM",
    stage: "Id. Decision Makers",
    confidence: "62%",
    amount: "$18,000",
    contact: "nathan@salesforce.com",
  },
  {
    id: "17991de5",
    opportunityName: "Acme - 1,621 Widgets",
    accountName: "Acme",
    closeDate: "5/16/17",
    stage: "Value Proposition",
    confidence: "70%",
    amount: "$23,600,000",
    contact: "jrogers@acme.com",
  },
  {
    id: "09b2cee9",
    opportunityName: "Acme - 430 Widgets",
    accountName: "Acme",
    closeDate: "6/12/18",
    stage: "Prospecting",
    confidence: "42%",
    amount: "$4,222,222",
    contact: "bob@acme.com",
  },
  {
    id: "d0035700",
    opportunityName: "salesforce.com - 677 Widgets",
    accountName: "salesforce.com",
    closeDate: "7/21/17 10:11AM",
    stage: "Id. Decision Makers",
    confidence: "42%",
    amount: "$24,200",
    contact: "nathan@salesforce.com",
  },
  {
    id: "4a526f0c",
    opportunityName: "Acme - 1,444 Widgets",
    accountName: "Acme",
    closeDate: "3/18/18",
    stage: "Value Proposition",
    confidence: "66%",
    amount: "$22,000,000",
    contact: "jrogers@acme.com",
  },
  {
    id: "9a5dbdb2",
    opportunityName: "Acme - 320 Widgets",
    accountName: "Acme",
    closeDate: "1/31/18",
    stage: "Prospecting",
    confidence: "36%",
    amount: "$4,322,000",
    contact: "bob@acme.com",
  },
  {
    id: "356dbb52",
    opportunityName: "salesforce.com - 4,000 Widgets",
    accountName: "salesforce.com",
    closeDate: "2/21/17 8:33PM",
    stage: "Id. Decision Makers",
    confidence: "72%",
    amount: "$15,000",
    contact: "nathan@salesforce.com",
  },
];

const dropdownCollection = [
  {
    label: "_trigger_log",
    value: "1",
    iconCategory: "utility",
    iconName: "table",
    href: "http://www.google.com",
  },
  {
    label: "_trigger_log_archive",
    value: "2",
    iconCategory: "utility",
    iconName: "kanban",
    href: "http://www.google.com",
  },
];

const CustomDataTableCell = ({ children, ...props }) => (
  <DataTableCell title={children} {...props}>
    <a
      href="javascript:void(0);"
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      {children}
    </a>
  </DataTableCell>
);

const leadSourceOptions = [
  { id: 1, label: "Third Party Program", value: "A0" },
  { id: 2, label: "Cold Call", value: "B0" },
  { id: 3, label: "LinkedIn", value: "C0" },
  { id: 4, label: "Direct Mail", value: "D0" },
  { id: 5, label: "Other", value: "E0" },
];

const opportunityTypeOptions = [
  { id: 1, label: "Add on Business", value: "A0" },
  { id: 2, label: "Courtesy", value: "B0" },
  { id: 3, label: "New Business", value: "C0" },
  { id: 4, label: "Renewal", value: "D0" },
  { id: 5, label: "Upgrade", value: "E0" },
];

const ipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum eros, vel porta metus dignissim vitae. Fusce finibus sed magna vitae tempus. Suspendisse condimentum, arcu eu viverra vulputate, mauris odio dictum velit, in dictum lorem augue id augue. Proin nec leo convallis, aliquet mi ut, interdum nunc.";

class App extends React.Component {
  static displayName = "DefaultExample";

  state = {
    sortColumn: "opportunityName",
    sortColumnDirection: {
      opportunityName: "asc",
    },
    items: [
      {
        id: "896a6a60",
        opportunityName: "Acme - 1,200 Widgets",
        accountName: "Acme",
        closeDate: "4/10/15",
        stage: "Value Proposition",
        confidence: "70%",
        amount: "$25,000,000",
        contact: "jrogers@acme.com",
      },
      {
        id: "44da9dcd",
        opportunityName: "Acme - 200 Widgets",
        accountName: "Acme",
        closeDate: "1/31/15",
        stage: "Prospecting",
        confidence: "30%",
        amount: "$5,000,000",
        contact: "bob@acme.com",
      },
      {
        id: "f988a721",
        opportunityName: "salesforce.com - 1,000 Widgets",
        accountName: "salesforce.com",
        closeDate: "1/31/15 3:45PM",
        stage: "Id. Decision Makers",
        confidence: "60%",
        amount: "$25,000",
        contact: "nathan@salesforce.com",
      },
      {
        id: "d7679cdd",
        opportunityName: "Acme - 800 Widgets",
        accountName: "Acme",
        closeDate: "6/11/18",
        stage: "Value Proposition",
        confidence: "85%",
        amount: "$970,000",
        contact: "jrogers@acme.com",
      },
      {
        id: "0085f7a0",
        opportunityName: "Acme - 744 Widgets",
        accountName: "Acme",
        closeDate: "4/15/17",
        stage: "Prospecting",
        confidence: "56%",
        amount: "$3,110,000",
        contact: "bob@acme.com",
      },
      {
        id: "b7acc778",
        opportunityName: "salesforce.com - 847 Widgets",
        accountName: "salesforce.com",
        closeDate: "5/23/18 1:02PM",
        stage: "Id. Decision Makers",
        confidence: "62%",
        amount: "$18,000",
        contact: "nathan@salesforce.com",
      },
      {
        id: "17991de5",
        opportunityName: "Acme - 1,621 Widgets",
        accountName: "Acme",
        closeDate: "5/16/17",
        stage: "Value Proposition",
        confidence: "70%",
        amount: "$23,600,000",
        contact: "jrogers@acme.com",
      },
      {
        id: "09b2cee9",
        opportunityName: "Acme - 430 Widgets",
        accountName: "Acme",
        closeDate: "6/12/18",
        stage: "Prospecting",
        confidence: "42%",
        amount: "$4,222,222",
        contact: "bob@acme.com",
      },
      {
        id: "d0035700",
        opportunityName: "salesforce.com - 677 Widgets",
        accountName: "salesforce.com",
        closeDate: "7/21/17 10:11AM",
        stage: "Id. Decision Makers",
        confidence: "42%",
        amount: "$24,200",
        contact: "nathan@salesforce.com",
      },
      {
        id: "4a526f0c",
        opportunityName: "Acme - 1,444 Widgets",
        accountName: "Acme",
        closeDate: "3/18/18",
        stage: "Value Proposition",
        confidence: "66%",
        amount: "$22,000,000",
        contact: "jrogers@acme.com",
      },
      {
        id: "9a5dbdb2",
        opportunityName: "Acme - 320 Widgets",
        accountName: "Acme",
        closeDate: "1/31/18",
        stage: "Prospecting",
        confidence: "36%",
        amount: "$4,322,000",
        contact: "bob@acme.com",
      },
      {
        id: "356dbb52",
        opportunityName: "salesforce.com - 4,000 Widgets",
        accountName: "salesforce.com",
        closeDate: "2/21/17 8:33PM",
        stage: "Id. Decision Makers",
        confidence: "72%",
        amount: "$15,000",
        contact: "nathan@salesforce.com",
      },
    ],
    selection: [],
    isOpen: false,
    leadSourceSelection: [leadSourceOptions[0]],
    opportunityTypeSelection: [opportunityTypeOptions[0]],
    testDrop: [],
    final: [],
  };

  var;

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
    this.state.testDrop.push("toto");
    console.log(this.state.isOpen);
    console.log(this.state.testDrop);
    for (const key in this.state.testDrop) {
      this.state.final[key] = [];
      this.state.final[key].label = this.state.testDrop[key];
      this.state.final[key].value = key;
    }

    console.log(this.state.final);
  };

  handleChanged = (event, data) => {
    this.setState({ selection: data.selection });
    console.log(event, data);
  };

  handleRowAction = (item, action) => {
    console.log(item, action);
  };

  handleSort = (sortColumn, ...rest) => {
    if (this.props.log) {
      this.props.log("sort")(sortColumn, ...rest);
    }

    const sortProperty = sortColumn.property;
    const { sortDirection } = sortColumn;
    const newState = {
      sortColumn: sortProperty,
      sortColumnDirection: {
        [sortProperty]: sortDirection,
      },
      items: [...this.state.items],
    };

    // needs to work in both directions
    newState.items = newState.items.sort((a, b) => {
      let val = 0;

      if (a[sortProperty] > b[sortProperty]) {
        val = 1;
      }
      if (a[sortProperty] < b[sortProperty]) {
        val = -1;
      }

      if (sortDirection === "desc") {
        val *= -1;
      }

      return val;
    });

    this.setState(newState);
  };

  handleSelect = (e) => {
    console.log(e.label);
  };

  //Renders app bar showing options according to user rights
  renderAppBar() {
    return (
      <GlobalHeader
        logoSrc="https://d0.awsstatic.com/FR%20Marketing/Summit/Summit%20Lyon/Logo_Edifixio_Gold.png"
        onSkipToContent={() => {
          console.log(">>> Skip to Content Clicked");
        }}
        onSkipToNav={() => {
          console.log(">>> Skip to Nav Clicked");
        }}
      >
        <GlobalHeaderSetup
          dropdown={
            <Dropdown
              id="header-setup-dropdown-id"
              options={[
                { id: "setupOptionOne", label: "Setup Option One" },
                { id: "setupOptionTwo", label: "Setup Option Two" },
              ]}
            />
          }
        />

        <GlobalHeaderButton iconName="adduser" onClick={this.toggleOpen} />

        <GlobalHeaderHelp
          iconName="settings"
          popover={
            <Popover
              ariaLabelledby="help-heading"
              body={
                <div>
                  <h2 className="slds-text-heading_small" id="help-heading">
                    Help and Training
                  </h2>
                  {ipsum}
                </div>
              }
              id="header-help-popover-id"
            />
          }
        />
      </GlobalHeader>
    );
  }

  render() {
    return (
      <div
        style={{
          margin: "50px auto",
          maxWidth: "774px",
        }}
      >
        {this.renderAppBar()}

        <GlobalNavigationBar>
          <GlobalNavigationBarRegion region="primary">
            <AppLauncher
              id="app-launcher-trigger"
              triggerName="Heroku Monitor"
            ></AppLauncher>
          </GlobalNavigationBarRegion>
          <GlobalNavigationBarRegion region="secondary" navigation>
            <GlobalNavigationBarLink
              active
              label="DashBoard Home"
              id="home-link"
            />
            <GlobalNavigationBarDropdown
              assistiveText={{ icon: "Open menu item submenu" }}
              id="primaryDropdown"
              label="System Table"
              options={dropdownCollection}
            />
            <GlobalNavigationBarDropdown
              assistiveText={{ icon: "Open menu item submenu" }}
              id="primaryDropdown"
              label="DataBase Table"
              options={this.state.final}
              //onClick={() => console.log("ici drop")}
              onSelect={this.handleSelect}
            />
          </GlobalNavigationBarRegion>
        </GlobalNavigationBar>

        <Person variant="contained" color="inherit"></Person>

        <Avatar
          assistiveText={{ icon: "User Icon Avatar" }}
          title="User Icon Avatar"
          variant="user"
        />

        {this.state.isOpen ? (
          <Modal
            assistiveText={{ dialogLabel: "Modal no header" }}
            isOpen={this.state.isOpen}
            onRequestClose={this.toggleOpen}
          >
            <section className="slds-p-around_medium">
              <p>
                Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
                ullamco deserunt aute id consequat veniam incididunt duis in
                sint irure nisi. Mollit officia cillum Lorem ullamco minim
                nostrud elit officia tempor esse quis. Cillum sunt ad dolore
                quis aute consequat ipsum magna exercitation reprehenderit
                magna. Tempor cupidatat consequat elit dolor adipisicing.
              </p>
            </section>
          </Modal>
        ) : null}

        <div
          style={{
            backgroundColor: "#FFB75D",
            padding: "10px 50px",
            display: "inline-block",
          }}
          className="-hint-parent -m-horizontal--small"
        >
          <Button
            assistiveText={{ icon: "Icon hint large" }}
            hint
            iconCategory="utility"
            iconName="settings"
            iconSize="large"
            variant="icon"
            onClick={this.toggleOpen}
          />
        </div>

        <DataTable
          assistiveText={{
            actionsHeader: "actions",
            columnSort: "sort this column",
            columnSortedAscending: "asc",
            columnSortedDescending: "desc",
            selectAllRows: "Select all rows",
            selectRow: "Select this row",
          }}
          fixedHeader
          fixedLayout
          items={this.state.items}
          id="DataTableExample-FixedHeaders"
          onRowChange={this.handleChanged}
          onSort={this.handleSort}
          selection={this.state.selection}
          selectRows="checkbox"
        >
          <DataTableColumn
            isSorted={this.state.sortColumn === "opportunityName"}
            label="Name"
            primaryColumn
            property="opportunityName"
            sortable
            sortDirection={this.state.sortColumnDirection.opportunityName}
          >
            <CustomDataTableCell />
          </DataTableColumn>
          <DataTableColumn label="Account Name" property="accountName" />
          <DataTableColumn label="Close Date" property="closeDate" />
          <DataTableColumn label="Stage" property="stage" />
          <DataTableColumn
            isSorted={this.state.sortColumn === "confidence"}
            label="Confidence"
            property="confidence"
            sortable
            sortDirection={this.state.sortColumnDirection.confidence}
          />
          <DataTableColumn label="Amount" property="amount" />
          <DataTableColumn label="Contact" property="contact">
            <CustomDataTableCell />
          </DataTableColumn>
          <DataTableRowActions
            options={[
              {
                id: 0,
                label: "Add to Group",
                value: "1",
              },
              {
                id: 1,
                label: "Publish",
                value: "2",
              },
              {
                id: 2,
                label: "Third of Seven",
                value: "3",
              },
              {
                id: 3,
                label: "Fourth of Seven",
                value: "4",
              },
              {
                id: 4,
                label: "Fifth of Seven",
                value: "5",
              },
              {
                id: 5,
                label: "Sixth of Seven",
                value: "6",
              },
              {
                id: 6,
                label: "Seventh of Seven",
                value: "7",
              },
            ]}
            menuPosition="overflowBoundaryElement"
            onAction={this.handleRowAction}
            dropdown={<Dropdown length="7" />}
          />
        </DataTable>
      </div>
    );
  }
}

//ReactDOM.render(<App />, mountNode);
export default App;
