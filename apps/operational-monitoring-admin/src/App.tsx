import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TrainingList } from "./training/TrainingList";
import { TrainingCreate } from "./training/TrainingCreate";
import { TrainingEdit } from "./training/TrainingEdit";
import { TrainingShow } from "./training/TrainingShow";
import { RiskAssessmentList } from "./riskAssessment/RiskAssessmentList";
import { RiskAssessmentCreate } from "./riskAssessment/RiskAssessmentCreate";
import { RiskAssessmentEdit } from "./riskAssessment/RiskAssessmentEdit";
import { RiskAssessmentShow } from "./riskAssessment/RiskAssessmentShow";
import { SopList } from "./sop/SopList";
import { SopCreate } from "./sop/SopCreate";
import { SopEdit } from "./sop/SopEdit";
import { SopShow } from "./sop/SopShow";
import { FeedbackLoopList } from "./feedbackLoop/FeedbackLoopList";
import { FeedbackLoopCreate } from "./feedbackLoop/FeedbackLoopCreate";
import { FeedbackLoopEdit } from "./feedbackLoop/FeedbackLoopEdit";
import { FeedbackLoopShow } from "./feedbackLoop/FeedbackLoopShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { MembersList } from "./members/MembersList";
import { MembersCreate } from "./members/MembersCreate";
import { MembersEdit } from "./members/MembersEdit";
import { MembersShow } from "./members/MembersShow";
import { ContingencyPlanList } from "./contingencyPlan/ContingencyPlanList";
import { ContingencyPlanCreate } from "./contingencyPlan/ContingencyPlanCreate";
import { ContingencyPlanEdit } from "./contingencyPlan/ContingencyPlanEdit";
import { ContingencyPlanShow } from "./contingencyPlan/ContingencyPlanShow";
import { TimesheetList } from "./timesheet/TimesheetList";
import { TimesheetCreate } from "./timesheet/TimesheetCreate";
import { TimesheetEdit } from "./timesheet/TimesheetEdit";
import { TimesheetShow } from "./timesheet/TimesheetShow";
import { PolicyList } from "./policy/PolicyList";
import { PolicyCreate } from "./policy/PolicyCreate";
import { PolicyEdit } from "./policy/PolicyEdit";
import { PolicyShow } from "./policy/PolicyShow";
import { TicketsList } from "./tickets/TicketsList";
import { TicketsCreate } from "./tickets/TicketsCreate";
import { TicketsEdit } from "./tickets/TicketsEdit";
import { TicketsShow } from "./tickets/TicketsShow";
import { ComplianceList } from "./compliance/ComplianceList";
import { ComplianceCreate } from "./compliance/ComplianceCreate";
import { ComplianceEdit } from "./compliance/ComplianceEdit";
import { ComplianceShow } from "./compliance/ComplianceShow";
import { KnowledgebaseList } from "./knowledgebase/KnowledgebaseList";
import { KnowledgebaseCreate } from "./knowledgebase/KnowledgebaseCreate";
import { KnowledgebaseEdit } from "./knowledgebase/KnowledgebaseEdit";
import { KnowledgebaseShow } from "./knowledgebase/KnowledgebaseShow";
import { GoalAssignmentsList } from "./goalAssignments/GoalAssignmentsList";
import { GoalAssignmentsCreate } from "./goalAssignments/GoalAssignmentsCreate";
import { GoalAssignmentsEdit } from "./goalAssignments/GoalAssignmentsEdit";
import { GoalAssignmentsShow } from "./goalAssignments/GoalAssignmentsShow";
import { SettingList } from "./setting/SettingList";
import { SettingCreate } from "./setting/SettingCreate";
import { SettingEdit } from "./setting/SettingEdit";
import { SettingShow } from "./setting/SettingShow";
import { MonitoringTaskList } from "./monitoringTask/MonitoringTaskList";
import { MonitoringTaskCreate } from "./monitoringTask/MonitoringTaskCreate";
import { MonitoringTaskEdit } from "./monitoringTask/MonitoringTaskEdit";
import { MonitoringTaskShow } from "./monitoringTask/MonitoringTaskShow";
import { KpiList } from "./kpi/KpiList";
import { KpiCreate } from "./kpi/KpiCreate";
import { KpiEdit } from "./kpi/KpiEdit";
import { KpiShow } from "./kpi/KpiShow";
import { ExecutiveSummaryList } from "./executiveSummary/ExecutiveSummaryList";
import { ExecutiveSummaryCreate } from "./executiveSummary/ExecutiveSummaryCreate";
import { ExecutiveSummaryEdit } from "./executiveSummary/ExecutiveSummaryEdit";
import { ExecutiveSummaryShow } from "./executiveSummary/ExecutiveSummaryShow";
import { GoalsAnalyticsList } from "./goalsAnalytics/GoalsAnalyticsList";
import { GoalsAnalyticsCreate } from "./goalsAnalytics/GoalsAnalyticsCreate";
import { GoalsAnalyticsEdit } from "./goalsAnalytics/GoalsAnalyticsEdit";
import { GoalsAnalyticsShow } from "./goalsAnalytics/GoalsAnalyticsShow";
import { FormsList } from "./forms/FormsList";
import { FormsCreate } from "./forms/FormsCreate";
import { FormsEdit } from "./forms/FormsEdit";
import { FormsShow } from "./forms/FormsShow";
import { MeetingsList } from "./meetings/MeetingsList";
import { MeetingsCreate } from "./meetings/MeetingsCreate";
import { MeetingsEdit } from "./meetings/MeetingsEdit";
import { MeetingsShow } from "./meetings/MeetingsShow";
import { ComplianceAndQualityList } from "./complianceAndQuality/ComplianceAndQualityList";
import { ComplianceAndQualityCreate } from "./complianceAndQuality/ComplianceAndQualityCreate";
import { ComplianceAndQualityEdit } from "./complianceAndQuality/ComplianceAndQualityEdit";
import { ComplianceAndQualityShow } from "./complianceAndQuality/ComplianceAndQualityShow";
import { BillingList } from "./billing/BillingList";
import { BillingCreate } from "./billing/BillingCreate";
import { BillingEdit } from "./billing/BillingEdit";
import { BillingShow } from "./billing/BillingShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { AnnouncementsList } from "./announcements/AnnouncementsList";
import { AnnouncementsCreate } from "./announcements/AnnouncementsCreate";
import { AnnouncementsEdit } from "./announcements/AnnouncementsEdit";
import { AnnouncementsShow } from "./announcements/AnnouncementsShow";
import { OperationalPerformanceList } from "./operationalPerformance/OperationalPerformanceList";
import { OperationalPerformanceCreate } from "./operationalPerformance/OperationalPerformanceCreate";
import { OperationalPerformanceEdit } from "./operationalPerformance/OperationalPerformanceEdit";
import { OperationalPerformanceShow } from "./operationalPerformance/OperationalPerformanceShow";
import { PeriodicGoalsList } from "./periodicGoals/PeriodicGoalsList";
import { PeriodicGoalsCreate } from "./periodicGoals/PeriodicGoalsCreate";
import { PeriodicGoalsEdit } from "./periodicGoals/PeriodicGoalsEdit";
import { PeriodicGoalsShow } from "./periodicGoals/PeriodicGoalsShow";
import { WorkInstructionList } from "./workInstruction/WorkInstructionList";
import { WorkInstructionCreate } from "./workInstruction/WorkInstructionCreate";
import { WorkInstructionEdit } from "./workInstruction/WorkInstructionEdit";
import { WorkInstructionShow } from "./workInstruction/WorkInstructionShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { SignOutList } from "./signOut/SignOutList";
import { SignOutCreate } from "./signOut/SignOutCreate";
import { SignOutEdit } from "./signOut/SignOutEdit";
import { SignOutShow } from "./signOut/SignOutShow";
import { TaskAssignmentList } from "./taskAssignment/TaskAssignmentList";
import { TaskAssignmentCreate } from "./taskAssignment/TaskAssignmentCreate";
import { TaskAssignmentEdit } from "./taskAssignment/TaskAssignmentEdit";
import { TaskAssignmentShow } from "./taskAssignment/TaskAssignmentShow";
import { PeriodicTaskList } from "./periodicTask/PeriodicTaskList";
import { PeriodicTaskCreate } from "./periodicTask/PeriodicTaskCreate";
import { PeriodicTaskEdit } from "./periodicTask/PeriodicTaskEdit";
import { PeriodicTaskShow } from "./periodicTask/PeriodicTaskShow";
import { ProjectsList } from "./projects/ProjectsList";
import { ProjectsCreate } from "./projects/ProjectsCreate";
import { ProjectsEdit } from "./projects/ProjectsEdit";
import { ProjectsShow } from "./projects/ProjectsShow";
import { QualityInspectionList } from "./qualityInspection/QualityInspectionList";
import { QualityInspectionCreate } from "./qualityInspection/QualityInspectionCreate";
import { QualityInspectionEdit } from "./qualityInspection/QualityInspectionEdit";
import { QualityInspectionShow } from "./qualityInspection/QualityInspectionShow";
import { CollaborationList } from "./collaboration/CollaborationList";
import { CollaborationCreate } from "./collaboration/CollaborationCreate";
import { CollaborationEdit } from "./collaboration/CollaborationEdit";
import { CollaborationShow } from "./collaboration/CollaborationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Operational Monitoring"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Training"
          list={TrainingList}
          edit={TrainingEdit}
          create={TrainingCreate}
          show={TrainingShow}
        />
        <Resource
          name="RiskAssessment"
          list={RiskAssessmentList}
          edit={RiskAssessmentEdit}
          create={RiskAssessmentCreate}
          show={RiskAssessmentShow}
        />
        <Resource
          name="Sop"
          list={SopList}
          edit={SopEdit}
          create={SopCreate}
          show={SopShow}
        />
        <Resource
          name="FeedbackLoop"
          list={FeedbackLoopList}
          edit={FeedbackLoopEdit}
          create={FeedbackLoopCreate}
          show={FeedbackLoopShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Members"
          list={MembersList}
          edit={MembersEdit}
          create={MembersCreate}
          show={MembersShow}
        />
        <Resource
          name="ContingencyPlan"
          list={ContingencyPlanList}
          edit={ContingencyPlanEdit}
          create={ContingencyPlanCreate}
          show={ContingencyPlanShow}
        />
        <Resource
          name="Timesheet"
          list={TimesheetList}
          edit={TimesheetEdit}
          create={TimesheetCreate}
          show={TimesheetShow}
        />
        <Resource
          name="Policy"
          list={PolicyList}
          edit={PolicyEdit}
          create={PolicyCreate}
          show={PolicyShow}
        />
        <Resource
          name="Tickets"
          list={TicketsList}
          edit={TicketsEdit}
          create={TicketsCreate}
          show={TicketsShow}
        />
        <Resource
          name="Compliance"
          list={ComplianceList}
          edit={ComplianceEdit}
          create={ComplianceCreate}
          show={ComplianceShow}
        />
        <Resource
          name="Knowledgebase"
          list={KnowledgebaseList}
          edit={KnowledgebaseEdit}
          create={KnowledgebaseCreate}
          show={KnowledgebaseShow}
        />
        <Resource
          name="GoalAssignments"
          list={GoalAssignmentsList}
          edit={GoalAssignmentsEdit}
          create={GoalAssignmentsCreate}
          show={GoalAssignmentsShow}
        />
        <Resource
          name="Setting"
          list={SettingList}
          edit={SettingEdit}
          create={SettingCreate}
          show={SettingShow}
        />
        <Resource
          name="MonitoringTask"
          list={MonitoringTaskList}
          edit={MonitoringTaskEdit}
          create={MonitoringTaskCreate}
          show={MonitoringTaskShow}
        />
        <Resource
          name="Kpi"
          list={KpiList}
          edit={KpiEdit}
          create={KpiCreate}
          show={KpiShow}
        />
        <Resource
          name="ExecutiveSummary"
          list={ExecutiveSummaryList}
          edit={ExecutiveSummaryEdit}
          create={ExecutiveSummaryCreate}
          show={ExecutiveSummaryShow}
        />
        <Resource
          name="GoalsAnalytics"
          list={GoalsAnalyticsList}
          edit={GoalsAnalyticsEdit}
          create={GoalsAnalyticsCreate}
          show={GoalsAnalyticsShow}
        />
        <Resource
          name="Forms"
          list={FormsList}
          edit={FormsEdit}
          create={FormsCreate}
          show={FormsShow}
        />
        <Resource
          name="Meetings"
          list={MeetingsList}
          edit={MeetingsEdit}
          create={MeetingsCreate}
          show={MeetingsShow}
        />
        <Resource
          name="ComplianceAndQuality"
          list={ComplianceAndQualityList}
          edit={ComplianceAndQualityEdit}
          create={ComplianceAndQualityCreate}
          show={ComplianceAndQualityShow}
        />
        <Resource
          name="Billing"
          list={BillingList}
          edit={BillingEdit}
          create={BillingCreate}
          show={BillingShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Announcements"
          list={AnnouncementsList}
          edit={AnnouncementsEdit}
          create={AnnouncementsCreate}
          show={AnnouncementsShow}
        />
        <Resource
          name="OperationalPerformance"
          list={OperationalPerformanceList}
          edit={OperationalPerformanceEdit}
          create={OperationalPerformanceCreate}
          show={OperationalPerformanceShow}
        />
        <Resource
          name="PeriodicGoals"
          list={PeriodicGoalsList}
          edit={PeriodicGoalsEdit}
          create={PeriodicGoalsCreate}
          show={PeriodicGoalsShow}
        />
        <Resource
          name="WorkInstruction"
          list={WorkInstructionList}
          edit={WorkInstructionEdit}
          create={WorkInstructionCreate}
          show={WorkInstructionShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="SignOut"
          list={SignOutList}
          edit={SignOutEdit}
          create={SignOutCreate}
          show={SignOutShow}
        />
        <Resource
          name="TaskAssignment"
          list={TaskAssignmentList}
          edit={TaskAssignmentEdit}
          create={TaskAssignmentCreate}
          show={TaskAssignmentShow}
        />
        <Resource
          name="PeriodicTask"
          list={PeriodicTaskList}
          edit={PeriodicTaskEdit}
          create={PeriodicTaskCreate}
          show={PeriodicTaskShow}
        />
        <Resource
          name="Projects"
          list={ProjectsList}
          edit={ProjectsEdit}
          create={ProjectsCreate}
          show={ProjectsShow}
        />
        <Resource
          name="QualityInspection"
          list={QualityInspectionList}
          edit={QualityInspectionEdit}
          create={QualityInspectionCreate}
          show={QualityInspectionShow}
        />
        <Resource
          name="Collaboration"
          list={CollaborationList}
          edit={CollaborationEdit}
          create={CollaborationCreate}
          show={CollaborationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
