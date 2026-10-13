import { NextResponse } from "next/server";
import { publishedProjects } from "@data/projects";

export const GET = async () => {
    return NextResponse.json({
        featureWork: publishedProjects
    });
};