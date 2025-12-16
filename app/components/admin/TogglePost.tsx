"use client";

import { togglePostAction } from "@/app/actions/admin/togglePostAction";

interface TogglePostButtonProps {
    postId: number;
    isActive: boolean;
}

export default function TogglePostButton({ postId, isActive }: TogglePostButtonProps) {
    return (
        <form action={togglePostAction}>
            <input type="hidden" name="postId" value={postId} />
            <input type="hidden" name="isActive" value={isActive.toString()} />
            <button
                type="submit"
                className={`px-4 py-2 rounded ${
                    isActive ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                } text-white`}
            >
                {isActive ? "Désactiver" : "Activer"}
            </button>
        </form>
    );
}