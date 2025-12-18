"use client";

import { togglePostAction } from "@/app/actions/admin/togglePostAction";
import { useState } from "react";

interface TogglePostButtonProps {
    postId: number;
    isActive: boolean;
}

export default function TogglePostButton({ postId, isActive }: TogglePostButtonProps) {
    const [activeStatus, setActiveStatus] = useState(isActive);
    const newStatus = !activeStatus;

    return (
        <form action={togglePostAction}>
            <input type="hidden" name="postId" value={postId} />
            <input type="hidden" name="isActive" value={newStatus.toString()} />
            <button
                type="submit"
                onClick={() => { setActiveStatus(newStatus); }}
                className={`px-4 py-2 rounded ${
                    activeStatus ? "bg-red-200 " : "bg-green-200 "
                } text-white`}
            >
                {activeStatus ? "Désactiver" : "Activer"}
            </button>
        </form>
    );
}