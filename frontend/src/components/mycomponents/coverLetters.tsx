import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Button } from "../ui/button"
import { Bold, Italic, Plus, Underline, Edit, Trash2 } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState, useRef } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "../ui/input"

interface CoverLetterPreset {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
}

export default function CoverLetters() {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");
    const [presetTitle, setPresetTitle] = useState("");
    const [activeStyles, setActiveStyles] = useState<string[]>([]);
    const [presets, setPresets] = useState<CoverLetterPreset[]>([]);
    const [editingPreset, setEditingPreset] = useState<CoverLetterPreset | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Function to insert styling at cursor position or around selected text
    const insertStyling = (style: string) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = content.substring(start, end);

        let before = '';
        let after = '';

        switch (style) {
            case 'bold':
                before = '**';
                after = '**';
                break;
            case 'italic':
                before = '_';
                after = '_';
                break;
            case 'underline':
                before = '<u>';
                after = '</u>';
                break;
        }

        const newContent = content.substring(0, start) + before + selectedText + after + content.substring(end);
        setContent(newContent);

        // Reset cursor position
        setTimeout(() => {
            textarea.focus();
            const newCursorPos = selectedText ? start + before.length + selectedText.length + after.length : start + before.length;
            textarea.setSelectionRange(newCursorPos, newCursorPos);
        }, 0);
    };

    // Handle toggle group changes
    const handleStyleChange = (values: string[]) => {
        setActiveStyles(values);

        // Apply the most recent style change
        const newStyle = values.find(style => !activeStyles.includes(style));
        if (newStyle) {
            insertStyling(newStyle);
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingPreset) {
            // Update existing preset
            setPresets(prev => prev.map(preset => 
                preset.id === editingPreset.id 
                    ? { ...preset, title: presetTitle, content: content }
                    : preset
            ));
            setEditingPreset(null);
        } else {
            // Create new preset
            const newPreset: CoverLetterPreset = {
                id: crypto.randomUUID(),
                title: presetTitle,
                content: content,
                createdAt: new Date()
            };
            setPresets(prev => [...prev, newPreset]);
        }

        // Reset form and close dialog
        resetForm();
    };

    // Reset form state
    const resetForm = () => {
        setPresetTitle("");
        setContent("");
        setActiveStyles([]);
        setIsOpen(false);
        setEditingPreset(null);
    };

    // Handle dialog close
    const handleClose = () => {
        resetForm();
    };

    // Handle edit preset
    const handleEdit = (preset: CoverLetterPreset) => {
        setEditingPreset(preset);
        setPresetTitle(preset.title);
        setContent(preset.content);
        setIsOpen(true);
    };

    // Handle delete preset
    const handleDelete = (presetId: string) => {
        setPresets(prev => prev.filter(preset => preset.id !== presetId));
    };

    // Render preview of styled text
    const renderPreview = (text: string) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/_(.*?)_/g, '<em>$1</em>')
            .replace(/<u>(.*?)<\/u>/g, '<u>$1</u>')
            .replace(/\n/g, '<br>');
    };

    // Truncate text for preview
    const truncateText = (text: string, maxLength: number = 150) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
    };

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="max-w-6xl border-x w-full border-b">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1" className="w-full">
                            <AccordionTrigger className="w-full px-2 cursor-pointer">
                                Cover Letters ({presets.length})
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <div className="w-full p-2 flex flex-col gap-2">
                                    {/* Add Button */}
                                    <div>
                                        <Button
                                            className="bg-transparent border border-black w-full rounded-none hover:bg-black/10 cursor-pointer"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            <Plus className="text-black" />
                                        </Button>
                                    </div>

                                    {/* Saved Presets */}
                                    {presets.length > 0 && (
                                        <div className="space-y-2">
                                            {presets.map((preset) => (
                                                <div key={preset.id} className="border border-black bg-[#FFF5EE]">
                                                    {/* Header */}
                                                    <div className="px-3 pt-3 border-black">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h3 className="text-lg font-semibold text-black">
                                                                    {preset.title}
                                                                </h3>
                                                            </div>
                                                            <div className="flex">
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    onClick={() => handleEdit(preset)}
                                                                    className="h-8 w-8 p-0 hover:bg-cyan-500/20  border-y border-l border-black rounded-none cursor-pointer"
                                                                >
                                                                    <Edit className="h-4 w-4 " />
                                                                </Button>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    onClick={() => handleDelete(preset.id)}
                                                                    className="h-8 w-8 p-0 hover:bg-red-500/20 text-red-600 hover:text-red-500 border border-black rounded-none cursor-pointer"
                                                                >
                                                                    <Trash2 className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Content Preview */}
                                                    <div className="p-3 bg-[#FFF5EE]">
                                                        <div className="text-sm text-gray-700">
                                                            <div 
                                                                className=" max-w-none"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: renderPreview(truncateText(preset.content))
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent className="sm:max-w-4xl">
                    <form onSubmit={handleSubmit}>
                        <DialogHeader>
                            <DialogTitle>
                                {editingPreset ? 'Edit preset' : 'Create new preset'}
                            </DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 pt-2">
                            <div>
                                <Input
                                    placeholder="Preset title"
                                    className="border-black rounded-none"
                                    value={presetTitle}
                                    onChange={(e) => setPresetTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <ToggleGroup
                                    variant="outline"
                                    type="multiple"
                                    value={activeStyles}
                                    onValueChange={handleStyleChange}
                                >
                                    <ToggleGroupItem
                                        value="bold"
                                        aria-label="Toggle bold"
                                        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                                    >
                                        <Bold className="h-4 w-4" />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                        value="italic"
                                        aria-label="Toggle italic"
                                        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                                    >
                                        <Italic className="h-4 w-4" />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                        value="underline"
                                        aria-label="Toggle underline"
                                        className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                                    >
                                        <Underline className="h-4 w-4" />
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>

                            <div className="space-y-2">
                                <Textarea
                                    ref={textareaRef}
                                    placeholder="Type your cover letter content here..."
                                    className="min-h-[200px] font-mono text-sm"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                />

                                {/* Live Preview */}
                                <p className="text-xs text-muted-foreground mb-2">Preview:</p>
                                <div className="border border-black p-2 bg-muted/20 overflow-y-auto min-h-44 max-h-46">
                                    {content && (
                                        <div
                                            className="prose prose-sm max-w-none"
                                            dangerouslySetInnerHTML={{
                                                __html: renderPreview(content)
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <DialogFooter className="pt-2">
                            <Button
                                type="submit"
                                className="rounded-none cursor-pointer w-full"
                                disabled={!presetTitle.trim() || !content.trim()}
                            >
                                {editingPreset ? 'Update' : 'Save'} Cover Letter
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
