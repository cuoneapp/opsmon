import { Module } from "@nestjs/common";
import { TrainingModule } from "./training/training.module";
import { RiskAssessmentModule } from "./riskAssessment/riskAssessment.module";
import { SopModule } from "./sop/sop.module";
import { FeedbackLoopModule } from "./feedbackLoop/feedbackLoop.module";
import { TeamModule } from "./team/team.module";
import { MembersModule } from "./members/members.module";
import { ContingencyPlanModule } from "./contingencyPlan/contingencyPlan.module";
import { TimesheetModule } from "./timesheet/timesheet.module";
import { PolicyModule } from "./policy/policy.module";
import { TicketsModule } from "./tickets/tickets.module";
import { ComplianceModule } from "./compliance/compliance.module";
import { KnowledgebaseModule } from "./knowledgebase/knowledgebase.module";
import { GoalAssignmentsModule } from "./goalAssignments/goalAssignments.module";
import { SettingModule } from "./setting/setting.module";
import { MonitoringTaskModule } from "./monitoringTask/monitoringTask.module";
import { KpiModule } from "./kpi/kpi.module";
import { ExecutiveSummaryModule } from "./executiveSummary/executiveSummary.module";
import { GoalsAnalyticsModule } from "./goalsAnalytics/goalsAnalytics.module";
import { FormsModule } from "./forms/forms.module";
import { MeetingsModule } from "./meetings/meetings.module";
import { ComplianceAndQualityModule } from "./complianceAndQuality/complianceAndQuality.module";
import { BillingModule } from "./billing/billing.module";
import { CompanyModule } from "./company/company.module";
import { AnnouncementsModule } from "./announcements/announcements.module";
import { OperationalPerformanceModule } from "./operationalPerformance/operationalPerformance.module";
import { PeriodicGoalsModule } from "./periodicGoals/periodicGoals.module";
import { WorkInstructionModule } from "./workInstruction/workInstruction.module";
import { ProfileModule } from "./profile/profile.module";
import { SignOutModule } from "./signOut/signOut.module";
import { TaskAssignmentModule } from "./taskAssignment/taskAssignment.module";
import { PeriodicTaskModule } from "./periodicTask/periodicTask.module";
import { ProjectsModule } from "./projects/projects.module";
import { QualityInspectionModule } from "./qualityInspection/qualityInspection.module";
import { CollaborationModule } from "./collaboration/collaboration.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    TrainingModule,
    RiskAssessmentModule,
    SopModule,
    FeedbackLoopModule,
    TeamModule,
    MembersModule,
    ContingencyPlanModule,
    TimesheetModule,
    PolicyModule,
    TicketsModule,
    ComplianceModule,
    KnowledgebaseModule,
    GoalAssignmentsModule,
    SettingModule,
    MonitoringTaskModule,
    KpiModule,
    ExecutiveSummaryModule,
    GoalsAnalyticsModule,
    FormsModule,
    MeetingsModule,
    ComplianceAndQualityModule,
    BillingModule,
    CompanyModule,
    AnnouncementsModule,
    OperationalPerformanceModule,
    PeriodicGoalsModule,
    WorkInstructionModule,
    ProfileModule,
    SignOutModule,
    TaskAssignmentModule,
    PeriodicTaskModule,
    ProjectsModule,
    QualityInspectionModule,
    CollaborationModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
