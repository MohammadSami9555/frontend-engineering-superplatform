import WorkspaceLayout from "@/components/layouts/WorkspaceLayout";

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WorkspaceLayout>{children}</WorkspaceLayout>;
}