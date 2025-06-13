import PageForm from "@/components/admin/pages/page-form";
import Heading from "@/components/shared/heading";

export default function AddPagePage() {
  return (
    <div className="p-6">
      <Heading
        title="Add Page"
        description="Create a new page"
      />
      
      <PageForm />
    </div>
  );
}