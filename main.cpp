#include "libs/imgui/imgui.h"

class MyWindow : public EditorWindow
{
public:
	MyWindow() {
		setName("TEST");
		setFlag(ImGuiWindowFlags_NoCollapse, true);
	}
}