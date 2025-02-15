import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ClassroomHeaderItem } from "../../components";
import { useEnrolledClassrooms, useOwnedClassrooms } from "../../hooks";

export const ClassroomPage = memo(() => {
  const { id, type } = useParams();
  // const [classroom, setClassrooom] = useState<Classroom | null>(null);
  // const request = useAuthentificationRequest();
  // const getClassroom = useCallback(async () => {
  //   try {
  //     const res = await request({
  //       url: `/${type}-classroom/${id}`,
  //       method: "GET",
  //     });
  //     console.log(res);

  //     if (!res || !res.data?.id) return;
  //     // setClassrooom(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  // console.log(classroom);

  // useEffect(() => {
  //   getClassroom();
  // }, []);
  const enrolledClassrooms = useEnrolledClassrooms();
  const ownedClassrooms = useOwnedClassrooms();
  const classroom = useMemo(() => {
    if (!id || !type) {
      return null;
    }
    return (
      (type === "enrolled" ? enrolledClassrooms : ownedClassrooms).find(
        (e) => e.id === +id
      ) || null
    );
  }, [type, enrolledClassrooms, ownedClassrooms, id]);

  if (!classroom) return <></>;
  return (
    <div className="w-full gap-y-3 flex flex-col items-center justify-center">
      <ClassroomHeaderItem value={classroom?.name || ""} name={"Name"} />
      {type === "owned" && (
        <ClassroomHeaderItem
          value={classroom?.code || ""}
          name={"Course Code"}
        />
      )}
      <ClassroomHeaderItem
        value={classroom?.owner || ""}
        name={"Classroom admin"}
      />
      <ClassroomHeaderItem value={classroom?.subject || ""} name={"Subject"} />
    </div>
  );
});
