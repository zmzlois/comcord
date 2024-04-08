import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProjectState {
    currentEmail: string;
    currentProjectId: string;
    currentProjectName: string;
    currentServerId: string;
    currentServerName: string;
    currentChannelId: string;
    currentChannelName: string;
}

interface ProjectAction {
    updateEmail: (currentEmail: ProjectState["currentEmail"]) => void;
    updateProjectId: (currentProjectId: ProjectState["currentProjectId"]) => void;
    updateProjectName: (
        currentProjectName: ProjectState["currentProjectName"],
    ) => void;
    updateServerId: (currentServerId: ProjectState["currentServerId"]) => void;
    updateServerName: (
        currentServerName: ProjectState["currentServerName"],
    ) => void;
    updateChannelId: (currentChannelId: ProjectState["currentChannelId"]) => void;
    updateChannelName: (
        currentChannelName: ProjectState["currentChannelName"],
    ) => void;
}

export const useProjectStore = create(
    persist<ProjectState & ProjectAction>(
        (set) => ({
            currentEmail: "",
            currentProjectId: "",
            currentProjectName: "",
            currentServerId: "",
            currentServerName: "",
            currentChannelId: "",
            currentChannelName: "",
            updateEmail: (email: string) => {
                set({ currentEmail: email });
            },
            updateProjectId: (projectId: string) => {
                set({ currentProjectId: projectId });
            },
            updateProjectName: (projectName: string) => {
                set({ currentProjectName: projectName });
            },
            updateServerId: (serverId: string) => {
                set({ currentServerId: serverId });
            },
            updateServerName: (serverName: string) => {
                set({ currentServerName: serverName });
            },
            updateChannelId: (channelId: string) => {
                set({ currentChannelId: channelId });
            },

            updateChannelName: (channelName: string) => {
                set({ currentChannelName: channelName });
            },
        }),
        {
            name: "projectStore",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);