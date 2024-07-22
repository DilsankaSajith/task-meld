/* eslint-disable*/
import supabase, { supabaseUrl } from "./supabase";

export async function getAssignments() {
  const { data, error } = await supabase.from("assignments").select("*");

  if (error) {
    throw new Error("Assignments could not be loaded");
    console.error(error);
  }
  return data;
}

export async function getAssignment(id) {
  const { data, error } = await supabase
    .from("assignments")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Assignment not found");
    console.error(error);
  }
  return data;
}

export async function createAssignment(newAssignment) {
  const fileName = `${Math.random()}-${newAssignment.file.name}`.replaceAll(
    "/",
    ""
  );
  const filePath = `${supabaseUrl}/storage/v1/object/public/files/${fileName}`;

  //https://dlccbxcyfhjqeogcvyce.supabase.co/storage/v1/object/public/files/file-01.pdf

  const { data, error } = await supabase
    .from("assignments")
    .insert([{ ...newAssignment, file: filePath }])
    .select();

  if (error) {
    throw new Error("Assignments could not be created");
    console.error(error);
  }

  const { error: storageError } = await supabase.storage
    .from("files")
    .upload(fileName, newAssignment.file);

  if (storageError) {
    await supabase.from("assignments").delete().eq("id", data.id);
    throw new Error(
      "file could not be uploaded and the assignment was not created"
    );
  }

  return data;
}

export async function deleteAssignment(id) {
  const { data, error } = await supabase
    .from("assignments")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error("Assignments could not be created");
    console.error(error);
  }
  return data;
}

export async function editAssignmentStatus(status, id) {
  const { data, error } = await supabase
    .from("assignments")
    .update({ status: status })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Assignments could not be created");
    console.error(error);
  }
  return data;
}

export async function editIsUrgent(isUrgent, id) {
  const { data, error } = await supabase
    .from("assignments")
    .update({ isUrgent: isUrgent })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Assignments could not be created");
    console.error(error);
  }
  return data;
}
